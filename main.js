async function loadTarifas() {
  const res = await fetch("tarifas_por_tipo.json");
  const tarifas = await res.json();

  function crearFila(label, id, tipo = "number", step = "") {
    return `<tr>
      <td class="label">${label}</td>
      <td class="celda"><input id="${id}" type="${tipo}" ${step}></td>
    </tr>`;
  }

  function rellenarTabla(idTabla, campos, selectId, ofertas) {
    const tabla = document.getElementById(idTabla);
    let html = `<tr><td class="label">OFERTA</td>
      <td class="celda"><select id="${selectId}">` +
      ofertas.map((o, i) => `<option value="${i}">${o.oferta}</option>`).join("") +
      `</select></td></tr>`;

    campos.forEach(c => {
      html += crearFila(c.label, c.id, c.tipo || "number", c.step ? `step="${c.step}"` : "");
    });
    tabla.innerHTML = html;
  }

  rellenarTabla("tabla_20td", [
    { label: "Potencia", id: "potencia20" },
    { label: "Días", id: "dias20" },
    { label: "Consumo P1", id: "consumo1_20" },
    { label: "Consumo P2", id: "consumo2_20" },
    { label: "Consumo P3", id: "consumo3_20" },
    { label: "Alquiler", id: "alquiler20" },
    { label: "Bono social", id: "bono20", step: "0.000001" },
    { label: "IVA", id: "iva20" },
    { label: "Factura actual", id: "factura20" }
  ], "oferta_20td", tarifas["2.0TD"]);

  rellenarTabla("tabla_30td", [
    { label: "Días", id: "dias30" },
    { label: "Potencia P1", id: "potencia30_p1" },
    { label: "Potencia P2", id: "potencia30_p2" },
    { label: "Potencia P3", id: "potencia30_p3" },
    { label: "Potencia P4", id: "potencia30_p4" },
    { label: "Potencia P5", id: "potencia30_p5" },
    { label: "Potencia P6", id: "potencia30_p6" },
    { label: "Consumo P1", id: "consumo30_p1" },
    { label: "Consumo P2", id: "consumo30_p2" },
    { label: "Consumo P3", id: "consumo30_p3" },
    { label: "Consumo P4", id: "consumo30_p4" },
    { label: "Consumo P5", id: "consumo30_p5" },
    { label: "Consumo P6", id: "consumo30_p6" },
    { label: "Alquiler", id: "alquiler30" },
    { label: "Bono social", id: "bono30", step: "0.000001" },
    { label: "IVA", id: "iva30" },
    { label: "Factura actual", id: "factura30" }
  ], "oferta_30td", tarifas["3.0TD"]);
}

loadTarifas();
